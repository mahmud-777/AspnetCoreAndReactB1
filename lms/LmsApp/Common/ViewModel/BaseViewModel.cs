using Common.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Common.ViewModel
{
    public abstract class BaseViewModel<T> where T : Entity
    {
        public BaseViewModel(Entity entity)
        {
            Id = entity.Id;
            Created = entity.Created;
            CreatedBy = entity.CreatedBy;
            Modified = entity.Modified;
            ModifiedBy = entity.ModifiedBy;
            IsActive = entity.IsActive;
            IsDeleted = entity.IsDeleted;
        }

        public string Id { get; private set; }
        public DateTime Created { get; private set; }
        public string CreatedBy { get; private set; }
        public DateTime Modified { get; private set; }
        public string ModifiedBy { get; private set; }
        public bool IsActive { get; private set; }
        public bool IsDeleted { get; private set; }
    }
}
