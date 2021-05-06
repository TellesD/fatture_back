import Place from '../models/Place'
import Service_group from '../models/Service_group';

module.exports = {
  async store(req, res) {
    console.log(req)
   const {places_id} = req.params;
   const {name} = req.body;
   
   const place = await Place.findByPk(places_id); 

   if(!place){
     return res.status(400).json({error: "place dont exist", place: places_id});

   };

   if(!name){
    return res.status(400).json({error: "nome não pode ser vazio"});
  };
    

   const service_group= await Service_group.create({
     name,
     places_id,
   });

   return res.json(service_group);

   
  },

  async index(req, res) {
   const {places_id} = req.params;
   
   const place = await Place.findByPk(places_id,{
     include: { association: 'service_groups'}
   });
   
   return res.json(place.service_groups);
  }
}