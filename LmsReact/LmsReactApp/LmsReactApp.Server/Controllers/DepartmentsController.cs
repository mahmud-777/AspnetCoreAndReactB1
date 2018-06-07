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
    [Route("api/Departments")]
    public class DepartmentsController : BaseController<Department,DepartmentRequestModel,DepartmentViewModel>
    {
        public DepartmentsController(IGenericService<Department, DepartmentRequestModel, DepartmentViewModel> service) : base(service)
        {
                
        }
    }
}