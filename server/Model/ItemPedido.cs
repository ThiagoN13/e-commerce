namespace server.Model
{
    public class ItemPedido
    {
        public int Id { get; set; }

        public virtual ProdutoLoja Produto { get; set; }

        public decimal Preco { get; set; }
    }
}