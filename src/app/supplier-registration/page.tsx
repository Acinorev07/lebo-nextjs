
//src/app/supplier-registration/page.tsx
import SidePanel from './components/SidePanel';
import FormSection from './components/FormSection';
import FormInput from '../ui/FormInput';
import SelectInput from '../ui/SelectInput';
import TaxLevelSelect from './components/TaxLevelSelect';
import PasswordInput from '../ui/PasswordInput';

export default function SupplierRegistrationPage() {
  const juridicalOptions = [
    { value: 'sa', label: 'Sociedad Anónima' },
    { value: 'ltda', label: 'Sociedad Limitada' },
    // ... más opciones
  ];

  const departamento = [
    { value: '5', label: 'Antioquia' },
    { value: '15', label: 'Boyaca' },
    { value: '8', label: 'Atlantico' },

    // ... más opciones
  ];

  const municipio = [
    { value: '8001', label: 'Barranquilla' },
    { value: '8078', label: 'Baranoa' },
    { value: '8137', label: 'Campo de la cruz' },

    // ... más opciones
  ];

  return (
    <
    >
    
      <aside className="hidden lg:block lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
        <SidePanel />
      </aside>
      
      <main className="lg:col-start-2 row-start-2 p-4 overflow-y-auto h-[calc(100vh-4rem)]">
        <FormSection id="seccion1" title="Identificación" legend="Datos de registro en el RUT">
          <SelectInput 
            name="orga-jurid" 
            label="Organización jurídica" 
            options={juridicalOptions} 
          />
          
          <FormInput 
            type="file"
            name="logo"
            label="Logo:"
            title="sube tu foto"
          />

          <FormInput
             type ="input"
             name= "razon_social"
             label="Razon Social"
             title="Razon social"

          />

          <FormInput
             type ="input"
             name= "nit"
             label="NIT"
             title="NIT"

          />

          <FormInput
            type ="input"
            name= "rues"
            label="RUES"
            title="RUES"
          />
          
          {/* Más campos... */}
        </FormSection>


        <FormSection id="seccion2" title="Direccion" legend="Direccion">
          <SelectInput 
              name="Departamento" 
              label="Departamento" 
              options={departamento} 
            />

            <SelectInput 
              name="Municipio" 
              label="Municipio" 
              options={municipio} 
            />

             <FormInput
              type ="input"
              name= "address"
              label="Linea de direccion"
              title="address"
            />
             <FormInput
              type ="input"
              name= "codigo_postal"
              label="Codigo postal"
              title="codigo_postal"
            />

        </FormSection>

        <FormSection id="seccion3" title="Obligaciones Tributarias" legend="obligaciones tributarias del facturador">
          <TaxLevelSelect />
        </FormSection>

        <FormSection id="seccion4" title="Informacion de contacto" legend="Datos de contacto del proveedor">
          
              <FormInput
                name= "nombre_contacto"
                label="Nombre del contacto principal"
                title="Nombre del contacto principal"
                pattern='^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$'
                required
              />

              <FormInput
                type='tel'
                name= "celular"
                label="Celular"
                title="Numero de celular"
                pattern='"[0-9]{10,15}'
                required
              />

              <FormInput
                type ="email"
                name= "correo"
                label="Correo electrónico"
                placeholder="correo@proveedor.com"
                title="Correo electronico valido"
                pattern='pattern="[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,}" '
                required
              />
          
        </FormSection> 

        <FormSection id='seccion5' title='Credenciales de acceso' legend='Configuracion de cuenta de acceso' >
              <PasswordInput
                  name='password'
                  label='Ingrese una contraseña'
                  />

              <PasswordInput
                  name='password'
                  label='Confirme la contraseña'
                  />

              <FormInput
                type ="checkbox"
                name= "terminos"
                label="Acepto los terminos y condiciones"
                title="Acepto los terminos y condiciones"
                required
              />
              <FormInput
                type ="checkbox"
                name= "privacidad"
                label="Acepto la politica de privacidad"
                title="Acepto la politica de privacidad"
                required
              />
        </FormSection>

        {/* Otras secciones... */}
      </main>

    </>
  );
}