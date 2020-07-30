using System;

namespace server.Model
{
    public class Cupom
    {
        public int Id { get; set; }

        public int Numero { get; set; }

        public DateTime DataCriacao { get; set; }

        public DateTime Validade { get; set; }
    }
}