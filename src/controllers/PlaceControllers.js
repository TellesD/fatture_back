import Place from '../models/Place';
import PlacePayment from '../models/PaymentPlace'

module.exports = {
  async store(req, res) {
    const { name, cpf, birthday, email, password,
      cep, address, address_numb, city, number, } = req.body;

    const place = await Place.create({
      name, cpf, birthday, email, password,
      cep, address, address_numb, city, number,
    });

    return res.json(place);
  },

  async index(req, res) {
    const places = await Place.findAll();

    return res.json(places);
  },

  async auth(req, res) {
    const { email, password } = req.body;

    const user = await Place.findOne({ where: { email } });

    if (!user) {
      return res.json({ error: "email não encontrado" })
    }
    if (user.password != password) {
      return res.json({ error: "senha não encontrada" })
    }
    return res.json(user.id)


  },

  async payment(req, res) {
    const { salon_Id, client, service_group, service, price } = req.body;

    await PlacePayment.create(req.body, (err, data) => {

      if (err) return res.send({ error: "error" });
      return res.status(200).json(data);
    });
  },

  async paymentShow(req, res) {
    const {salon_Id, dateStart, dateEnd } = req.body;
    console.log(salon_Id);
    let place = await PlacePayment.find({ salon_Id: { $in: salon_Id} });
    

  
    return res.status(200).json(place);
  }
}