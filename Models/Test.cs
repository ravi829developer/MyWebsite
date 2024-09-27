using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class KpiMasterTables
    {
        [Key]
        public int KpiID { get; set; }
        public string? KpiDescr { get; set; }
        public decimal KpiScore { get; set; }
        public string? DeptName { get; set; }
    }

    public class KpiReals
    {
        [Key]
        public int KpiRealID { get; set; }
        public int KpiID { get; set; }
        public string? Month { get; set; }
        public int Year { get; set; }
        public decimal KpiRealScore { get; set; }

        // Navigation property
        public KpiMasterTables? Kpi{ get; set; }
    }
    public class KpiScoresViewModel
    {
        public int Year { get; set; }
        public List<KpiMasterTables>? Kpi { get; set; }
        public List<KpiReals>? KpiRealScore { get; set; }
    }

}

