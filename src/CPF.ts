export default class CPF {
    constructor(readonly value: string) {
        if (!this.validateCPF(value)) throw new Error("Invalid CPF");

        this.value = value;
    }

    private validateCPF(cpf: string): boolean {
        if (!cpf) return false;
        cpf = this.clearCPFfromSpecialCharacters(cpf);

        if (!this.cpfHasValidLength(cpf)) return false;
        if (this.allDigitsEqualsFirstDigit(cpf)) return false;

        const { firstVerifier, secondVerifier } = this.computeVerifiers(cpf);

        const firstDigit = this.computeFirtDidigt(firstVerifier);
        const secondDigit = this.computeSecondDidigt(firstDigit, secondVerifier);

        let verifyingDigit = cpf.substring(cpf.length - 2, cpf.length);
        return verifyingDigit === `${firstDigit}${secondDigit}`;
    }

    private clearCPFfromSpecialCharacters(cpf: string): string {
        return cpf
            .replace(".", "")
            .replace(".", "")
            .replace("-", "")
            .replace(" ", "");
    }

    private cpfHasValidLength(cpf: string): boolean {
        return cpf.length === 11;
    }

    private allDigitsEqualsFirstDigit(cpf: string): boolean {
        return cpf.split("").every((digit) => digit === cpf[0]);
    }

    private computeVerifiers(cpf: string): {
        firstVerifier: number;
        secondVerifier: number;
    } {
        let firstVerifier = 0;
        let secondVerifier = 0;

        for (let i = 1; i < cpf.length - 1; i++) {
            const currentDigit = parseInt(cpf.substring(i - 1, i));
            firstVerifier = firstVerifier + (11 - i) * currentDigit;
            secondVerifier = secondVerifier + (12 - i) * currentDigit;
        }
        return {
            firstVerifier,
            secondVerifier,
        };
    }

    private computeFirtDidigt(firstVerifyier: number): number {
        const remainder = firstVerifyier % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    private computeSecondDidigt(
        firstDigit: number,
        secondVerifyier: number
    ): number {
        secondVerifyier += 2 * firstDigit;
        const remainder = secondVerifyier % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }
}