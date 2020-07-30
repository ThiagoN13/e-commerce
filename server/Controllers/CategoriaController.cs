using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Model;


namespace server.Controllers
{

    [ApiController]
    [Route("v1/categoria")]
    public class CategoriaController : ControllerBase
    {

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Categoria>>> Get([FromServices] DataContext context /*, [FromBody] Categoria model*/)
        {


            var cat1 = new Categoria
            {
                Id = 1,
                Descricao = "Produto 1"

            };

            var cat2 = new Categoria
            {
                Id = 2,
                Descricao = "Produto 1"

            };

            context.Categorias.Add(cat1);
            context.Categorias.Add(cat2);

            // context.SaveChanges();

            IQueryable<Categoria> query = context.Categorias;

            var retornCategorias = await query.ToListAsync();

            return retornCategorias;
        }


        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Categoria>> Post([FromServices] DataContext context, [FromBody] Categoria model)
        {

            if (ModelState.IsValid)
            {

                if (model.Id == 0)
                {

                    context.Categorias.Add(model);
                    await context.SaveChangesAsync();
                }
                else
                {
                    context.Categorias.Update(model);
                    await context.SaveChangesAsync();

                }
                return model;


            }
            else
            {

                return BadRequest(ModelState);
            }

        }


    }

}