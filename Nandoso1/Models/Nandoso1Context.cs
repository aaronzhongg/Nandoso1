using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Nandoso1.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class Nandoso1Context : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx

        public class MyConfiguration : DbMigrationsConfiguration<Nandoso1Context>
        {
            public MyConfiguration()
            {
                this.AutomaticMigrationDataLossAllowed = true;
                this.AutomaticMigrationsEnabled = true;
            }

            protected override void Seed(Nandoso1Context context)
            {
                var specials = new List<Specials>
                {
                    new Specials { ItemName = "Grilled Chicken",   NormalPrice = "$12.99",
                        SpecialPrice = "$9.99" },
                    new Specials { ItemName = "Fried Chicken", NormalPrice = "$12.99",
                        SpecialPrice = "$9.99" },
                    new Specials { ItemName = "Spicy Fried Chicken",   NormalPrice = "$13.50",
                        SpecialPrice = "$9.99" },
                    new Specials { ItemName = "Peri Peri Grilled Chicken",    NormalPrice = "$14.99",
                        SpecialPrice = "$9.99" },

                };
                specials.ForEach(s => context.Specials.AddOrUpdate(p => p.ItemName, s));
                context.SaveChanges();
            }

        }
        public Nandoso1Context() : base("name=Nandoso1Context")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<Nandoso1Context, MyConfiguration>());
        }

        public System.Data.Entity.DbSet<Nandoso1.Models.Specials> Specials { get; set; }
    }
}
