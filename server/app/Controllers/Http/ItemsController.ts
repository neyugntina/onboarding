// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Item from 'App/Models/Item'
import ItemValidator from 'App/Validators/ItemValidator'

export default class ItemsController {
  public async getAll({}: HttpContextContract) {
    return await Item.query()
  }
  public async get({ request }: HttpContextContract) {
    let { id } = request.params()
    return await Item.find(id)
  }
  public async create({ request }: HttpContextContract) {
    let { name, description } = request.all()
    let result = await Item.create({ description: description, name: name })
    return result
  }
  public async edit({ request }: HttpContextContract) {
    let { id } = request.params()
    let body = request.all()
    let item = await Item.find(id)
    item?.merge(body)
    return await item?.save()
  }
  public async delete({ request }: HttpContextContract) {
    let { id } = request.params()
    try {
      const iden = await (await Item.query()).find(id)
      return (await Item.delete()).find(id)
    } catch (e) {
      console.error(e)
    }
    return (await Item.query()).find(id)
  }
}
