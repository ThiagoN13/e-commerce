using System;

namespace server.Model
{
    public class Pergunta
    {
        public int Id { get; set; }

        public string Descricao { get; set; }

        public virtual Produto Produto { get; set; }

        public virtual Usuario Usuario { get; set; }

        public virtual DateTime DataCriacao { get; set; }
    }
}