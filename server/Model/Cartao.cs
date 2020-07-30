using System;

namespace server.Model
{
    public class Cartao
    {
        public int Id { get; set; }

        public string Apelido { get; set; }

        public int Numero { get; set; }

        public int MesVencimento { get; set; }

        public int AnoVencimento { get; set; }

        public int Cvv { get; set; }

        public virtual Usuario Usuario { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}