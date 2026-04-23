"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MysqlDb {
    add(info) {
        console.log(info);
        return true;
    }
    update(info, id) {
        throw new Error("Method not implemented.");
    }
    delete(id) {
        throw new Error("Method not implemented.");
    }
    get(id) {
        throw new Error("Method not implemented.");
    }
}
class User {
    username;
    password;
}
const u = new User();
u.password = "1";
u.username = "2";
const onMysql = new MysqlDb;
onMysql.add(u);
//# sourceMappingURL=index.js.map