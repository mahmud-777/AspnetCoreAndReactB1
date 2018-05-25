using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public class Teacher: Entity
    {
        public string Name { get; set; }

        public string Phone { get; set; }

        public string Courses { get; set; }

        public int TotalCredit { get; set; }

        //public string DepartmentId { get; set; }

        //[ForeignKey("DepartmentId")]
        //public virtual Department Department { get; set; }
    }
}
