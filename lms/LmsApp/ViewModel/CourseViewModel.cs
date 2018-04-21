using Common.ViewModel;
using Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace ViewModel
{
   public class CourseViewModel: BaseViewModel<Course>
    {
        public CourseViewModel(Course course) : base(course)
        {
            Name = course.Name;
            Topic = course.Topic;
            IsFee = course.IsFree;
        }

        public string Name { get; private set; }
        public string Topic { get; private set; }
        public bool IsFee { get; private set; }
    }
}
