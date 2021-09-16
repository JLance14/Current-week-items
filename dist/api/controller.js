'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const controller = {
    home: (req, res) => {
        // tslint:disable-next-line:no-console
        console.log("ACCESSING HOME");
        return {};
    },
    currentWeekItems: (req, res) => {
        // tslint:disable-next-line:no-console
        console.log("ACCESSING COOK IT");
        return res.json("aa");
    }
};
exports.default = controller;
//# sourceMappingURL=controller.js.map