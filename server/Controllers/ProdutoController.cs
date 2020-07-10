using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Model;
using server.Data;

namespace server.Controllers
{

    [ApiController]
    [Route("v1/produto")]
    public class ProdutoController : ControllerBase
    {

        [HttpGet]
        [Route("")]
        public async Task<ActionResult<List<Produto>>> Get([FromServices] DataContext context /*, [FromBody] Produto model*/)
        {
            
           
            IQueryable<Produto> query = context.Produtos;

            // if (model.Descricao != "")
            //     query = query.Where(p => p.Descricao == model.Descricao);

            // if (model.Sigla != "")
            //     query = query.Where(p => p.Sigla == model.Sigla);

            // if (model.Email != "")
            //     query = query.Where(p => p.Email == model.Email);

            var retornoProduto = await query.ToListAsync();

            return retornoProduto;
        }


        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Produto>> Post([FromServices] DataContext context, [FromBody] Produto model)
        {

            if (ModelState.IsValid)
            {

                if (model.Id == 0)
                {

                    context.Produtos.Add(model);
                    await context.SaveChangesAsync();
                }
                else
                {
                    context.Produtos.Update(model);
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