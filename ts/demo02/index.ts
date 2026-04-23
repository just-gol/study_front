interface DBI<T> {
  add(ino: T): boolean
  update(info: T, id: number): boolean
  delete(id: number): boolean
  get(id: number): any[]
}

class MysqlDb<T> implements DBI<T> {
  add(info: T): boolean {
    console.log(info);
    return true
  }
  update(info: T, id: number): boolean {
    throw new Error("Method not implemented.")
  }
  delete(id: number): boolean {
    throw new Error("Method not implemented.")
  }
  get(id: number): any[] {
    throw new Error("Method not implemented.")
  }
}

class User {
  username: string | undefined
  password: string | undefined

}

const u = new User()
u.password = "1"
u.username = "2"
const onMysql = new MysqlDb<User>
onMysql.add(u)