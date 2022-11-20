import CPF from "../src/CPF";

describe("CPF validation V3", () => {
    test("19632341031 should be a valid a cpf", () => {
        const cpf = new CPF("19632341031");
        expect(cpf).toBeDefined();
    });

    test("00000000000 should be an ivalid a cpf", () => {
        expect(() => new CPF("00000000000")).toThrow(new Error("Invalid CPF"))
    });

    test("196.323.410-31 should be a valid a cpf", () => {
        const cpf = new CPF("196.323.410-31");
        expect(cpf).toBeDefined();
    });

    test("196.323.410-32 should be an invalid a cpf", () => {
        expect(() => new CPF("196.323.410-32")).toThrow(new Error("Invalid CPF"))
    });

    test("111.444.772-10 should be an invalid a cpf", () => {
        expect(() => new CPF("111.444.772-10")).toThrow(new Error("Invalid CPF"))
    });

    test("19632341 should be an invalid a cpf", () => {
        expect(() => new CPF("19632341")).toThrow(new Error("Invalid CPF"))
    });

    test("12345678900 should be an invalid a cpf", () => {
        expect(() => new CPF("12345678900")).toThrow(new Error("Invalid CPF"))
    });

    test("196.323.410-32196.323.410-32 should be an invalid a cpf", () => {
        expect(() => new CPF("196.323.410-32196.323.410-32")).toThrow(new Error("Invalid CPF"))
    });

    test("Empty should be an invalid a cpf", () => {
        expect(() => new CPF("")).toThrow(new Error("Invalid CPF"))
    });

    test("ABCABCABC should be an invalid a cpf", () => {
        expect(() => new CPF("ABCABCABC")).toThrow(new Error("Invalid CPF"))
    });
});
