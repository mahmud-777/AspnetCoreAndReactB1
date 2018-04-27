using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModel
{
   public class TeacherViewModel : BaseViewModel<Teacher>
    {
        public TeacherViewModel(Teacher entity) : base(entity)
        {
            Name = entity.Name;
        }

        public string Name { get; set; }
    }
}
