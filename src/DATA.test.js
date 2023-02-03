import { _saveQuestion, _saveQuestionAnswer } from "./utils/_Data";

describe("_saveQuestion", () => {
  it("_saveQuestion will save question and return true if the correct formatted data is passed", async () => {
    const res = await _saveQuestion({
      author: "sarahedo",
      optionOneText: "option one text",
      optionTwoText: "option two text",
    });
    expect(res.author).toBe("sarahedo");
  });

  it("_saveQuestion will return error if incorrect data is passed", async () => {
    await expect(_saveQuestion(1, 2)).rejects.toEqual(
      "optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("_saveQuestionAnswer will return true if correct formatted data is passed", async () => {
    await expect(
      _saveQuestionAnswer({
        authedUser: "Tyler",
        qid: "15tikchyvgcos16odwtslm",
        answer: "optionOne",
      })
    ).toBeTruthy();
  });

  it("_saveQuestionAnswer will return error if incorrect data is passed", async () => {
    await expect(_saveQuestionAnswer(1, 2)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});
