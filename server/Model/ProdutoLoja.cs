namespace server.Model
{
    public class ProdutoLoja
    {
        public int Id { get; set; }

        public virtual Produto Produto { get; set; }

        public decimal Preco { get; set; }

        public int Quantidade { get; set; }
    }
}