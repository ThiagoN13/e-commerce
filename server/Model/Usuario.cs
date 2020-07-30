using System;

namespace server.Model
{
    public class Usuario
    {
        public int Id { get; set; }

        public String Nome { get; set; }

        public String Email { get; set; }

        public String Senha { get; set; }

        public int Cpf { get; set; }

        public bool Ativo { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}