<?php include 'includes/header.php'; ?>

<!-- Contact Start -->
<div class="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
    <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4"></div>
                <div class="col-md-8">
                    <div class="contact-form">
                        <h3 class="text-white mb-4">Escribime</h3>
                        <form method="POST" action="/procesar.php">
                            <div class="control-group mb-3">
                                <input type="text" name="nombre" class="form-control" placeholder="Tu Nombre" />
                            </div>
                            <div class="control-group mb-3">
                                <input type="email" name="email" class="form-control" placeholder="Tu Email" />
                            </div>
                            <div class="control-group mb-3">
                                <input type="text" name="asunto" class="form-control" placeholder="Asunto" />
                            </div>
                            <div class="control-group">
                                <textarea class="form-control" name="mensaje" placeholder="Mensaje"></textarea>
                            </div>
                            <div>
                                <button type="submit" class="btn">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Contact End -->

<?php include 'includes/footer.php'; ?>