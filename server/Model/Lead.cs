using System;

namespace server.Model
{
    public class Lead
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Email { get; set; }

        public DateTime DataCriacao { get; set; }
    }
}