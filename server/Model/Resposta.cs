using System;

namespace server.Model
{
    public class Resposta
    {
        public int Id { get; set; }

        public virtual Pergunta Pergunta { get; set; }

        public virtual Usuario Usuario { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}