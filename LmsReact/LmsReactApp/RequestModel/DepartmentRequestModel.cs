using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace RequestModel
{
   public class DepartmentRequestModel: BaseRequestModel<Department>
    {
        public DepartmentRequestModel(string keyword, string orderBy = "Modified", string isAscending = "False") : base(keyword, orderBy, isAscending)
        {
                
        }

        //protected override Expression<Func<Department, bool>> GetExpression()
        //{
        //    Keyword = Keyword.ToLower();
        //    ExpressionObj = x => x.Name.ToLower().Contains(Keyword) || x.Phone.ToLower().Contains(Keyword) || x.Courses.ToLower().Contains(Keyword);

        //    return ExpressionObj;
        //}
    }
}
