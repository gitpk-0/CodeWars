module pairofgloves.pairofgloves {
    requires javafx.controls;
    requires javafx.fxml;


    opens pairofgloves.pairofgloves to javafx.fxml;
    exports pairofgloves.pairofgloves;
}