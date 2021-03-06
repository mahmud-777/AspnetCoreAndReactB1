﻿using System;
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
    [Route("api/Teachers")]
    public class TeachersController : BaseController<Teacher, TeacherRequestModel, TeacherViewModel>
    {
        //private IGenericService<Teacher, TeacherRequestModel, TeacherViewModel> _service;


        public TeachersController(IGenericService<Teacher, TeacherRequestModel, TeacherViewModel> service): base(service)
        {
           // _service = service;
        }

        //[HttpPost]
        //[Route("Search")]
        //public async Task<IActionResult> GetTeachers([FromBody] TeacherRequestModel request)
        //{
        //    var items = await _service.SearchAsync(request);
        //    return Ok(items);
        //}

        //[HttpPost]
        //[Route("Add")]
        //public IActionResult AddTeacher([FromBody] Teacher teacher)
        //{
        //    teacher.Id = Guid.NewGuid().ToString();
        //    teacher.Modified = DateTime.Now;
        //    teacher.Created = DateTime.Now;
        //    teacher.CreatedBy = "System";
        //    teacher.ModifiedBy = "System";
        //    teacher.IsActive = true;
        //    teacher.IsDeleted = false;



        //    bool add =  _service.Add(teacher);
        //    return Ok(teacher.Id);
        //}


    }
}