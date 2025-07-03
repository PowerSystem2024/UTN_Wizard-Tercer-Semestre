package enumeraciones;

public enum Continentes { 
    AFRICA(53, "1.2 billones"),
    EUROPA(36, "1.1 billinoes"),
    ASIA(44, "1.9 billones"),
    AMERICA(34, "150.2 millones"),
    OCEANIA(14, "1.2 billones");
    
    private final int paises;
    private String habitantes;
    
    Continentes(int paises, String habitantes){
        this.paises = paises;
        this.habitantes = habitantes;
    }
    
    //Método get
    public int getPaises(){
        return this.paises;
    }
    
    public String getHabitantes(){
        return this.habitantes;
    }
}
