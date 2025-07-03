
package domain;


public abstract class FiguraGeometrica {
    protected String tipoFigura; //atributo
    
    protected FiguraGeometrica(String tipoFigura){//constructor
        this.tipoFigura = tipoFigura;
    }
    
    //Método abstracto
    public abstract void dibujar();
    
    //Agregamos get y set
    public String getTipoFigura(){
        return tipoFigura;
    }
    
    public void setTipoFigura(String tipoFigura){
        this.tipoFigura = tipoFigura;
    }

    @Override
    public String toString() {
        return "FiguraGeometrica{" + "tipoFigura=" + tipoFigura + '}';
    }
    
    
}
