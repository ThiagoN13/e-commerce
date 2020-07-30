using System;
using System.Collections.Generic;

namespace server.Model
{
    public class Pedido
    {
        public int Id { get; set; }

        public int Numero { get; set; }

        public virtual Usuario Usuario { get; set; }

        public virtual Cupom Cupom { get; set; }

        public virtual Endereco EnderecoEntrega { get; set; }

        public int FormaPagamento { get; set; }

        public virtual Cartao CartaoUtilizado { get; set; }

        public decimal Total { get; set; }

        public DateTime DataCriacao { get; set; }

        public virtual ICollection<ItemPedido> ItensPedido { get; set; }
    }
}