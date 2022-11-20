import Coupon from "../src/Coupon";
import Item from "../src/Item";
import Order from "../src/Order";

describe("Order tests", () => {
    test("Should not create an order with an invalid CPF", () => {
        expect(() => new Order("111.111.111-11")).toThrow(new Error("Invalid CPF"));
    });
    test("Should create an order with 3 items", () => {
        const order = new Order("196.323.410-31");
        order.addItem(new Item(1, "Guitarra Elétrica", 1000), 1);
        order.addItem(new Item(1, "Amplificador", 5000), 1);
        order.addItem(new Item(1, "Cabo", 30), 3);

        expect(order.getTotal()).toBe(6090);
    });
    test("Should create an order with 3 items and a discont coupon", () => {
        const order = new Order("196.323.410-31");
        order.addItem(new Item(1, "Guitarra Elétrica", 1000), 1);
        order.addItem(new Item(1, "Amplificador", 5000), 1);
        order.addItem(new Item(1, "Cabo", 30), 3);

        order.addCoupon(new Coupon("30OFF", 30));
        expect(order.getTotal()).toBe(4263);
    });
    test("Should create an order with not items", () => {
        const order = new Order("196.323.410-31");
        expect(order.getTotal()).toBe(0);
    });
})