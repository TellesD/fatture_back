import Service_group from '../models/Service_group';
import Service from '../models/Service'

module.exports = {
  async store(req, res) {
   const {service_groups_id} = req.params;
   const {name} = req.body;
   console.log(service_groups_id)

   const service_group = await Service_group.findByPk(service_groups_id); 

   if(!service_group){
     return res.status(400).json({error: "service dont exist", service: service_groups_id});

   };
    
   const service= await Service.create({
     name,
     service_groups_id,
   });

   return res.json(service);

   
  },

  async index(req, res) {
   const {service_groups_id} = req.params;
   
   const service_group = await Service_group.findByPk(service_groups_id,{
     include: { association: 'services'}
   });
   
   return res.json(service_group.services);
  }
}