import { stockService } from "../services/stock.service.js";

export const getHoldings = async (req, res) => {
  try {
    const holdings = await stockService.getHoldings(req.user.uid);

    res.status(200).json(holdings);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "보유 종목 조회 실패",
    });
  }
};

export const createHolding = async (req, res) => {
  try {
    const id = await stockService.createHolding(req.user.uid, req.body);

    res.status(201).json({
      id,
      message: "종목 추가 성공",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "종목 추가 실패",
    });
  }
};

export const deleteHolding = async (req, res) => {
  try {
    await stockService.deleteHolding(req.user.uid, req.params.id);

    res.status(200).json({
      message: "삭제 완료",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "삭제 실패",
    });
  }
};