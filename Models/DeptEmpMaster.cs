using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class DeptEmpMaster
    {
        public class EmpMasters
        {
            [Key]
            public int EmpID { get; set; }
            public String EmpName { get; set; }
            public string EMailID { get; set; }
            public string Position { get; set; }
            public int DeptID { get; set; }
            public int? ManagerID { get; set; }
            public int? ReviewerID { get; set; }
            public string PoornataID { get; set; }

            public int StatusID { get; set; }
        }
        public class DeptMaster
        {
            [Key]
            public int DeptId { get; set; }
            public string? DeptName { get; set; }

            public int StatusID { get; set; }
            public int? MainDeptID { get; set; }
        }
        public class DepartmentViewModel
        {
            public string DeptName { get; set; }
            public List<string> EmployeeName { get; set; }
        }

    }
}
