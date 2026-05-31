import sys
import json
import yfinance as yf

command = sys.argv[1]

# -----------------
# 현재가 조회
# -----------------

if command == "quote":

  symbols = sys.argv[2:]

  result = []

  for symbol in symbols:
    try:
      ticker = yf.Ticker(symbol)

      info = ticker.info

      current_price = info.get("currentPrice")

      previous_close = info.get("previousClose")

      change = 0
      change_percent = 0

      if current_price and previous_close:
        change = (current_price - previous_close)

        change_percent = (change / previous_close) * 100

      result.append({
        "symbol": symbol,
        "currentPrice": current_price,
        "previousClose": previous_close,
        "change": round(change, 2),
        "changePercent": round(change_percent, 2),
        "volume": info.get("volume"),
        "marketCap": info.get("marketCap")
      })

    except Exception: pass

  print(json.dumps(result))

# -----------------
# 차트 조회
# -----------------

elif command == "history":
    symbol = sys.argv[2]

    period = sys.argv[3]

    ticker = yf.Ticker(symbol)

    df = ticker.history(period=period)

    result = []

    for index, row in df.iterrows():
      result.append({
        "date": str(index),
        "close": float(row["Close"])
      })

    print(json.dumps(result))