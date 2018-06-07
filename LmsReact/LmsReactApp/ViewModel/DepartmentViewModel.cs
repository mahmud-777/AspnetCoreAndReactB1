using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModel
{
   public class DepartmentViewModel: BaseViewModel<Department>
    {
        public DepartmentViewModel(Department department):base(department)
        {
                
        }
    }
}
