using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Nandoso1.Models
{
    public class Specials
    {
        public int ID { get; set; }
        public string ItemName { get; set; }
        public string NormalPrice { get; set; }
        public string SpecialPrice { get; set; }
    }
}