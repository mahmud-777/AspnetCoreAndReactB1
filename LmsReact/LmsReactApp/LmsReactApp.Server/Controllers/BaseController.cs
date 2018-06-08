using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Model;
using RequestModel;
using Service;
using ViewModel;

namespace LmsReactApp.Server.Controllers
{
    [Produces("application/json")]
    
    public abstract class BaseController<M,R,V> : Controller where R : BaseRequestModel<M> where M : Entity where V : BaseViewModel<M>
    {
        protected IGenericService<M,R,V> _service;

        public BaseController(IGenericService<M,R,V>service)
        {
           this._service = service;
        }
        [HttpPost]
        [Route("Search")]
        public async Task<IActionResult> GetTeachers([FromBody] R request)
        {
            var items = await _service.SearchAsync(request);
            return Ok(items);
        }

        [HttpPost]
        [Route("Add")]
        public IActionResult Add([FromBody] M model)
        {
            model.Id = Guid.NewGuid().ToString();
            model.Created = DateTime.Now;
            model.Modified = DateTime.Now;
            model.CreatedBy = "system";
            model.ModifiedBy = "system";
            model.IsActive = true;

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            bool added = _service.Add(model);
            if (added)
            {
                return Ok(model.Id);
            }

            return BadRequest("Couldn't save model.");
        }

        [HttpGet]
        [Route("GetDetail")]
        public IActionResult GetDetail(string id)
        {
          var detail= this._service.GetDetail(id);
            return this.Ok(detail);

        }

    }
}