using System;
using System.Collections.Generic;
using System.Text;

namespace Model
{
   public class Department:Entity
    {
        public string Name { get; set; }

        public virtual ICollection<Teacher>Teachers { get; set; }
    }
}
