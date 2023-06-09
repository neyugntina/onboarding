// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Item from "App/Models/Item";
import ItemValidator from "App/Validators/ItemValidator";

export default class ItemsController {
  public async getAll({}: HttpContextContract) {
    return await Item.query();
  }
  public async get({ request }: HttpContextContract) {
    let { id } = request.params();
    return await Item.find(id);
  }
  public async create({ request }: HttpContextContract) {
    let { name, description } = request.all();
    let result = await Item.create({ description: description, name: name });
    return result;
  }

  public async update({ request, response }: HttpContextContract) {
    let { id } = request.params();
    let body = request.all();
    let item = await Item.find(id);
    console.log(body);
    return await item?.merge(body).save();
  }
  public async delete({ request, response }: HttpContextContract) {
    let { id } = request.params();
    let item = await Item.find(id);

    if (item != null) {
      await item.delete();
      return response.ok("Item deleted successfully");
    }

    return response.badRequest(`Item with id ${id} not found`);
  }
}
