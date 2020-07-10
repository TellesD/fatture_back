import Price from '../models/Price';
import Service from '../models/Service'

module.exports = {
  async store(req, res) {
   const {services_id} = req.params;
   const {value} = req.body;
   console.log(services_id)

   const service = await Service.findByPk(services_id); 

   if(!service){
     return res.status(400).json(service);

   };
    
   const price= await Price.create({
     value,
     services_id,
   });

   return res.json(price);

   
  },

  async index(req, res) {
   const {services_id} = req.params;
   
   const service = await Service.findByPk(services_id,{
     include: { association: 'prices'}
   });
   
   return res.json(service.prices);
  }
}