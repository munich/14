import "../../../../../packages/core-jest-matchers/src/transactions/types/multi-payment";

import { Enums } from "@arkecosystem/crypto";
const { TransactionTypes } = Enums;

describe(".toBeMultiPaymentType", () => {
    test("passes when given a valid transaction", () => {
        expect({ type: TransactionTypes.MultiPayment }).toBeMultiPaymentType();
    });

    test("fails when given an invalid transaction", () => {
        expect(expect({ type: "invalid" }).toBeMultiPaymentType).toThrowError(
            "Expected value to be a valid MultiPayment transaction.",
        );
    });
});
