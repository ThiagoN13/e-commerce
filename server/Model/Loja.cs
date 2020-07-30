using System;

namespace server.Model
{
    public class Loja
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Cnpj { get; set; }

        public virtual Usuario Dono { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}