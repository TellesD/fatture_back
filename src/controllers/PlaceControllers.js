import Place from '../models/Place';
import PlacePayment from '../models/PaymentPlace'

module.exports = {
  async store(req, res) {
    const { name, cpf, birthday, email, password,
      cep, address, address_numb, city, number, fantasy_name } = req.body;

    const place = await Place.create({
      name, cpf, birthday, email, password,
      cep, address, address_numb, city, number, fantasy_name
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
      return res.status(401).json({ error: "email não encontrado" })
    }
    if (user.password != password) {
      return res.status(401).json({ error: "senha não encontrada" })
    }
    return res.json(user.id)


  },

  async payment(req, res) {
    const { salon_Id, client, service_group, service, price } = req.body;
    console.log(req.body);
    await PlacePayment.create(req.body, (err, data) => {

      if (err) return res.send({ error: err });
      return res.status(200).json(data);
    });
  },

  async paymentShow(req, res) {
 
    
    const { salon_Id, dateStart, dateEnd } = req.body;
    let x = dateStart;
    let y = dateEnd;
    try {

      console.log();
      let place = await PlacePayment.find({
        salon_Id: { $in: salon_Id }, created: {
          $gte: x,
          $lte: y
        }
      });

      console.log(place)

      return res.status(200).json(place);


    } catch { }
  }
}