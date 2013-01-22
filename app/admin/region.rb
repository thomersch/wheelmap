ActiveAdmin.register Region do

  filter :name
  filter :created_at
  filter :updated_at

  controller do
    def update
      region = resource
      region.update_attributes(params[:region])
      super
    end
  end

  index do
    column :id
    column :name
    column :depth
    column :parent
    default_actions
  end

  form do |f|
    f.inputs do
      f.input :name
    end
    f.buttons
  end

end