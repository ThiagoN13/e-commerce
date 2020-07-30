--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)
-- Dumped by pg_dump version 12.3 (Ubuntu 12.3-1.pgdg18.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: caracteristicas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.caracteristicas (
    id integer NOT NULL
);


ALTER TABLE public.caracteristicas OWNER TO mpetshop;

--
-- Name: cartoes; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.cartoes (
    id integer NOT NULL,
    apelido character varying(100),
    numero integer,
    "mesVencimento" numeric(2,0),
    "anoVencimento" numeric(4,0),
    cvv numeric(3,0),
    usuario integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.cartoes OWNER TO mpetshop;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.categorias (
    id integer NOT NULL,
    descricao character varying(200),
    "dataCriacao" date
);


ALTER TABLE public.categorias OWNER TO mpetshop;

--
-- Name: cupons; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.cupons (
    id integer NOT NULL,
    "dataCriacao" date,
    validade date,
    numero numeric
);


ALTER TABLE public.cupons OWNER TO mpetshop;

--
-- Name: enderecos; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.enderecos (
    id integer NOT NULL,
    "dataCriacao" date,
    cep numeric(9,0)
);


ALTER TABLE public.enderecos OWNER TO mpetshop;

--
-- Name: enderecos_lojas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.enderecos_lojas (
    id integer NOT NULL,
    loja numeric,
    endereco numeric,
    "dataCriacao" date,
);


ALTER TABLE public.enderecos_lojas OWNER TO mpetshop;

--
-- Name: enderecos_usuarios; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.enderecos_usuarios (
    id integer NOT NULL,
    usuario numeric,
    "dataCriacao" date
);


ALTER TABLE public.enderecos_usuarios OWNER TO mpetshop;

--
-- Name: gerais; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.gerais (
    id integer NOT NULL,
);


ALTER TABLE public.gerais OWNER TO mpetshop;

--
-- Name: imagens; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.imagens (
    id integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.imagens OWNER TO mpetshop;

--
-- Name: itens_pedido; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.itens_pedido (
    id integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.itens_pedido OWNER TO mpetshop;

--
-- Name: leads; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.leads (
    id integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.leads OWNER TO mpetshop;

--
-- Name: lojas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.lojas (
    id integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.lojas OWNER TO mpetshop;

--
-- Name: marcas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.marcas (
    id integer NOT NULL,
    nome character varying(100)
);


ALTER TABLE public.marcas OWNER TO mpetshop;

--
-- Name: pedidos; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.pedidos (
    id integer NOT NULL,
    "dataCriacao" date
);


ALTER TABLE public.pedidos OWNER TO mpetshop;

--
-- Name: perguntas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.perguntas (
    id integer NOT NULL,
    usuario numeric,
    produto numeric
);


ALTER TABLE public.perguntas OWNER TO mpetshop;

--
-- Name: produtos; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.produtos (
    nome character varying(200) NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.produtos OWNER TO mpetshop;

--
-- Name: respostas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.respostas (
    id integer NOT NULL,
    descricao bit varying(500),
    "dataCriacao" date NOT NULL
);


ALTER TABLE public.respostas OWNER TO mpetshop;

--
-- Name: usuarios; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.usuarios (
    id integer NOT NULL,
    "dataCriacao" date NOT NULL,
    nome character varying(200),
    senha character varying(200),
    cpf numeric(11,0),
    ativo boolean
);


ALTER TABLE public.usuarios OWNER TO mpetshop;

--
-- Name: usuarios_cartoes; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.usuarios_cartoes (
    id integer NOT NULL,
    cartao integer NOT NULL
);


ALTER TABLE public.usuarios_cartoes OWNER TO mpetshop;

--
-- Name: usuarios_lojas; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.usuarios_lojas (
    id integer NOT NULL,
    usuario integer NOT NULL
);


ALTER TABLE public.usuarios_lojas OWNER TO mpetshop;

--
-- Name: usuarios_pedidos; Type: TABLE; Schema: public; Owner: mpetshop
--

CREATE TABLE public.usuarios_pedidos (
    id integer NOT NULL,
    pedido integer NOT NULL,
    "dataCriacao" date NOT NULL
);


ALTER TABLE public.usuarios_pedidos OWNER TO mpetshop;

--
-- Data for Name: caracteristicas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.caracteristicas (id) FROM stdin;
\.


--
-- Data for Name: cartoes; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.cartoes (id, apelido, numero, "mesVencimento", "anoVencimento", cvv, usuario, "dataCriacao") FROM stdin;
\.


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.categorias (id, descricao, "dataCriacao") FROM stdin;
\.


--
-- Data for Name: cupons; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.cupons (id, "dataCriacao", validade, numero) FROM stdin;
\.


--
-- Data for Name: enderecos; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.enderecos (id, "dataCriacao", cep) FROM stdin;
\.


--
-- Data for Name: enderecos_lojas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.enderecos_lojas (id, loja, endereco) FROM stdin;
\.


--
-- Data for Name: enderecos_usuarios; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.enderecos_usuarios (usuario) FROM stdin;
\.


--
-- Data for Name: gerais; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.gerais  FROM stdin;
\.


--
-- Data for Name: imagens; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.imagens (id) FROM stdin;
\.


--
-- Data for Name: itens_pedido; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.itens_pedido (id) FROM stdin;
\.


--
-- Data for Name: leads; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.leads (id) FROM stdin;
\.


--
-- Data for Name: lojas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.lojas (id) FROM stdin;
\.


--
-- Data for Name: marcas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.marcas (id, nome) FROM stdin;
\.


--
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.pedidos (id) FROM stdin;
\.


--
-- Data for Name: perguntas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.perguntas (id, usuario, produto) FROM stdin;
\.


--
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.produtos (nome, id) FROM stdin;
\.


--
-- Data for Name: respostas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.respostas (id, descricao, "dataCriacao") FROM stdin;
\.


--
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.usuarios (id, "dataCriacao", nome, senha, cpf, ativo) FROM stdin;
\.


--
-- Data for Name: usuarios_cartoes; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.usuarios_cartoes (id, cartao) FROM stdin;
\.


--
-- Data for Name: usuarios_lojas; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.usuarios_lojas (id, usuario) FROM stdin;
\.


--
-- Data for Name: usuarios_pedidos; Type: TABLE DATA; Schema: public; Owner: mpetshop
--

COPY public.usuarios_pedidos (id, pedido, "dataCriacao") FROM stdin;
\.


--
-- Name: caracteristicas caracteristicas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.caracteristicas
    ADD CONSTRAINT caracteristicas_pkey PRIMARY KEY (id);


--
-- Name: cartoes cartoes_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.cartoes
    ADD CONSTRAINT cartoes_pkey PRIMARY KEY (id);


--
-- Name: categorias categorias_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);


--
-- Name: cupons cupons_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.cupons
    ADD CONSTRAINT cupons_pkey PRIMARY KEY (id);


--
-- Name: enderecos_lojas enderecos_lojas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.enderecos_lojas
    ADD CONSTRAINT enderecos_lojas_pkey PRIMARY KEY (id);


--
-- Name: enderecos enderecos_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.enderecos
    ADD CONSTRAINT enderecos_pkey PRIMARY KEY (id);


--
-- Name: imagens imagens_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.imagens
    ADD CONSTRAINT imagens_pkey PRIMARY KEY (id);


--
-- Name: itens_pedido itens_pedido_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.itens_pedido
    ADD CONSTRAINT itens_pedido_pkey PRIMARY KEY (id);


--
-- Name: leads leads_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.leads
    ADD CONSTRAINT leads_pkey PRIMARY KEY (id);


--
-- Name: lojas lojas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.lojas
    ADD CONSTRAINT lojas_pkey PRIMARY KEY (id);


--
-- Name: marcas marcas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.marcas
    ADD CONSTRAINT marcas_pkey PRIMARY KEY (id);


--
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);


--
-- Name: perguntas perguntas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.perguntas
    ADD CONSTRAINT perguntas_pkey PRIMARY KEY (id);


--
-- Name: produtos produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id);


--
-- Name: respostas respostas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.respostas
    ADD CONSTRAINT respostas_pkey PRIMARY KEY (id);


--
-- Name: usuarios_cartoes usuarios_cartoes_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.usuarios_cartoes
    ADD CONSTRAINT usuarios_cartoes_pkey PRIMARY KEY (id);


--
-- Name: usuarios_lojas usuarios_lojas_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.usuarios_lojas
    ADD CONSTRAINT usuarios_lojas_pkey PRIMARY KEY (id);


--
-- Name: usuarios_pedidos usuarios_pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.usuarios_pedidos
    ADD CONSTRAINT usuarios_pedidos_pkey PRIMARY KEY (id);


--
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: mpetshop
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--
