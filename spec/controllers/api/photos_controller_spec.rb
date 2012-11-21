require 'spec_helper'

describe Api::PhotosController do

  before :all do
    User.delete_all
  end

  let :user do
    Factory.create(:user)
  end

  let :poi do
    Factory.create(:poi)
  end

  let :photo do
    Factory.create(:photo, :user => user, :poi => poi)
  end

  context 'index action' do

    before :each do
      3.times do
        Factory.create(:photo, :user => user, :poi => poi)
      end
    end

    it "should scope photos to given node" do
      subject.should_receive(:parent).and_return(poi)
      poi.should_receive(:photos).and_return(Photo.scoped({}))
      get(:index, :node_id => poi.id, :api_key => user.authentication_token)
      response.should be_success
    end

    it "should scope photos to given user" do
      subject.should_receive(:parent).and_return(user)
      user.should_receive(:photos).and_return(Photo.scoped({}))
      get(:index, :url => api_user_photos_path, :api_key => user.authentication_token)
      response.should be_success
    end

    context 'format json' do

      it "should render json when using accept header" do
        request.env['HTTP_ACCEPT'] = 'application/json'
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end

      it "should render json as default format" do
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:json)
      end
    end

    context 'format xml' do

      before :each do
        request.env['HTTP_ACCEPT'] = 'application/xml'
      end

      it "should render xml when using accept header" do
        get(:index, :node_id => poi.id, :api_key => user.authentication_token)
        response.should be_success
        request.format.to_sym.should eql(:xml)
      end
    end
  end

  context 'create action' do

    before :each do
      user.save!
      poi.save!
    end

    it "is possible to upload images for a given node" do
      post(:create, :node_id => poi.id, :api_key => user.authentication_token, :photo => {:image => fixture_file_upload('/placeholder.jpg')})
      response.code.should eql "201"
    end

    it "is not possible to upload images for a user" do
      lambda {
        post(:create, :url => api_user_photos_path, :api_key => user.authentication_token, :photo => {:image => fixture_file_upload('/placeholder.jpg')})
      }.should raise_error ActionController::RoutingError
    end
  end

  context 'destroy action' do
    before :each do
      photo.save!
    end

    let :another_photo do
      Factory.create(:photo)
    end

    it "is possible to delete images for a given node" do
      delete(:destroy, :id => photo.id, :node_id => poi.id, :api_key => user.authentication_token)
      response.code.should eql "200"
    end

    it "is possible to delete images for a given user" do
      delete(:destroy, :id => photo.id, :url => api_user_photo_path(photo), :api_key => user.authentication_token)
      response.code.should eql "200"
    end

    it "is not possible to delete an image, which does not belong to given node" do
      delete(:destroy, :id => another_photo.id, :node_id => poi.id, :api_key => user.authentication_token)
      response.code.should eql "404"
    end

    it "is not possible to delete an image, which does not belong to given user" do
      delete(:destroy, :id => another_photo.id, :url => api_user_photo_path(another_photo), :api_key => user.authentication_token)
      response.code.should eql "404"
    end
  end

end
