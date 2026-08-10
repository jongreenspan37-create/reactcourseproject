import { useState } from "react";
import BtnDigit from "../components/BtnDigit";
import BtnOperator from "../components/BtnOperator";
import { evaluate } from "mathjs";

export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState("");

  function handleDigit(value) {
    setType("digit");
    setExpression((prev) => prev + value);
  }

  function handleOperator(value) {
    if (type === "operator") return;

    setType("operator");
    setExpression((prev) => prev + value);
  }

  function handlePoint(value) {
    const currentNumber = expression.split(/[+\-*/]/).pop();
    if (currentNumber.includes(".")) {
      return; // already has a decimal, ignore the press
    }

    setExpression(expression + ".");
  }

  function handleMC() {
    setExpression("");
  }

  function handleBackspace() {
    setExpression((prev) => prev.slice(0, -1));
  }

  function handleEquals() {
    try {
      setExpression(evaluate(expression));
    } catch {
      setExpression("Error");
    }
  }

  return (
    <>
      <header>
        <h1 className="text-center text-5xl font-bold">Calculator</h1>
      </header>
      <main className="mt-4">
        <section className="px-4">
          <div
            className="mx-auto p-4 border border-slate-700 
                max-w-[400px] grid grid-cols-4 auto-rows-[60px] 
                gap-2 rounded-xl"
          >
            <div
              className="relative p-2 border-2 border-slate-600 
                        col-span-4 rounded-lg text-right text-lg"
            >
              {expression}
            </div>

            <BtnOperator value="MC" onPress={handleMC} sign="MC"></BtnOperator>
            <BtnOperator
              value="C"
              onPress={handleBackspace}
              sign="C"
            ></BtnOperator>
            <BtnOperator value="(" onPress={handleDigit} sign="("></BtnOperator>
            <BtnOperator value=")" onPress={handleDigit} sign=")"></BtnOperator>

            <BtnOperator
              value="/"
              onPress={handleOperator}
              sign="&divide;"
            ></BtnOperator>
            <BtnDigit value="7" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="8" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="9" onPress={handleDigit}></BtnDigit>

            <BtnOperator
              value="-"
              onPress={handleOperator}
              sign="-"
            ></BtnOperator>
            <BtnDigit value="4" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="5" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="6" onPress={handleDigit}></BtnDigit>

            <BtnOperator
              value="*"
              onPress={handleOperator}
              sign="x"
            ></BtnOperator>

            <BtnDigit value="1" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="2" onPress={handleDigit}></BtnDigit>
            <BtnDigit value="3" onPress={handleDigit}></BtnDigit>

            <BtnOperator
              value="+"
              onPress={handleOperator}
              sign="+"
            ></BtnOperator>

            <BtnDigit value="0" onPress={handleDigit}></BtnDigit>

            <BtnOperator value="." onPress={handlePoint} sign="."></BtnOperator>
            <BtnOperator onPress={handleEquals} sign="="></BtnOperator>
          </div>
        </section>
      </main>
    </>
  );
}
