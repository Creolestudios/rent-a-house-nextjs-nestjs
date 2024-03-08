
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum PolicyTypeEnum {
    FLEXIBLE = "FLEXIBLE",
    STANDARD = "STANDARD"
}

export interface SearchAndFilterPropertyInput {
    min_price?: Nullable<number>;
    max_price?: Nullable<number>;
    is_furnished?: Nullable<number>;
    size?: Nullable<number[]>;
    page_number?: Nullable<number>;
    page_size?: Nullable<number>;
    start_date?: Nullable<string>;
    end_date?: Nullable<string>;
    locations?: Nullable<string[]>;
    type?: Nullable<string[]>;
    facilities?: Nullable<string[]>;
    suitable?: Nullable<string[]>;
    bills_includes?: Nullable<boolean>;
    sort_by: number;
}

export interface MessageListingDto {
    booking_id: number;
    to_id: number;
    from_id: number;
}

export interface MessageSendDto {
    id?: Nullable<number>;
    landlord_id?: Nullable<number>;
    property_id?: Nullable<number>;
    start_date?: Nullable<string>;
    end_date?: Nullable<string>;
    amount?: Nullable<number>;
    message?: Nullable<string>;
    currency?: Nullable<string>;
    status?: Nullable<number>;
    to_id?: Nullable<number>;
    from_id?: Nullable<number>;
}

export interface LoginUserArgs {
    email: string;
    password: string;
    user_type: number;
}

export interface ResetPasswordArgs {
    reset_password_token: string;
    password: string;
    confirmPassword: string;
}

export interface LogInArgs {
    code: string;
}

export interface CreateAdminInput {
    email: string;
    user_name: string;
    password: string;
    role: number;
}

export interface UpdateAdminInput {
    role: number;
    id: number;
    email: string;
    status: number;
}

export interface CreateContactUsInput {
    name: string;
    email: string;
    mobile: string;
    message: string;
}

export interface CreateSiteconfigInput {
    name: string;
    address: string;
    contact: number;
    status: number;
}

export interface UpdateSiteconfigInput {
    name?: Nullable<string>;
    address?: Nullable<string>;
    contact?: Nullable<number>;
    status?: Nullable<number>;
    id: number;
}

export interface UpdateCommissionOnly {
    value: number;
    commission_from: number;
}

export interface UpdateUserType {
    id: number;
    is_landlord: boolean;
}

export interface UpdateUserProfileOnly {
    id: number;
    image?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    address?: Nullable<string>;
    gender?: Nullable<number>;
    dob?: Nullable<string>;
    occupation?: Nullable<string>;
    country_id?: Nullable<number>;
}

export interface SupportingDocument {
    id: number;
    identity_proof?: Nullable<string>;
    proof_of_occupation_income?: Nullable<string>;
}

export interface ChangePasswordArgs {
    id: number;
    token: string;
    password: string;
    confirmPassword: string;
}

export interface UserNotificationSettings {
    id: number;
    notification_is_enable?: Nullable<number>;
    notification_language: number;
}

export interface UserContactInformation {
    id: number;
    email?: Nullable<string>;
    dialer_code?: Nullable<number>;
    mobile?: Nullable<number>;
}

export interface CreateUserInput {
    image?: Nullable<string>;
    first_name: string;
    last_name: string;
    address?: Nullable<string>;
    country_id?: Nullable<number>;
    gender?: Nullable<number>;
    dob?: Nullable<string>;
    occupation?: Nullable<string>;
    identity_proof?: Nullable<string>;
    proof_of_occupation_income?: Nullable<string>;
    email: string;
    password: string;
    is_mobile_verified?: Nullable<number>;
    is_email_verified?: Nullable<number>;
    social_type?: Nullable<number>;
    notification_is_enable?: Nullable<number>;
    notification_language?: Nullable<number>;
    is_landlord?: Nullable<number>;
}

export interface CreatePropertyStep2Input {
    type: string;
    name: string;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    currency: string;
    house_no: string;
    rent: number;
    id?: Nullable<number>;
    postal_code: string;
    country_id: number;
    state_id: number;
    city_id: number;
    min_rental_period: number;
    max_rental_period: number;
    available_from: DateTime;
}

export interface CreatePropertyStep3Input {
    bedrooms: number;
    peoples: number;
    size: number;
    property_id: number;
    details: string;
    is_furnished: number;
}

export interface CreatePropertyStep4Input {
    step4inputList: CreatePropertyStep4InputType[];
    property_id: number;
}

export interface CreatePropertyStep4InputType {
    amenities_id: number;
    availability: number;
}

export interface CreatePropertyStep5Input {
    contract_type: number;
    property_id: number;
    cancellation_policy_id: number;
    additional_required_cost?: Nullable<Nullable<AdditionalRequiredCostInput>[]>;
}

export interface AdditionalRequiredCostInput {
    name?: Nullable<string>;
    amount?: Nullable<number>;
}

export interface CreatePropertyStep6Input {
    document: number;
    gender: number;
    tenant: number;
    pets: number;
    property_id: number;
}

export interface VerifyOTPInput {
    mobileNumber: string;
    otp: string;
    property_id: number;
}

export interface UpdatePropertyStep2Input {
    type?: Nullable<string>;
    name?: Nullable<string>;
    latitude?: Nullable<number>;
    longitude?: Nullable<number>;
    currency?: Nullable<string>;
    house_no?: Nullable<string>;
    rent?: Nullable<number>;
    id?: Nullable<number>;
    postal_code?: Nullable<string>;
    country_id?: Nullable<number>;
    state_id?: Nullable<number>;
    city_id?: Nullable<number>;
    min_rental_period?: Nullable<number>;
    max_rental_period?: Nullable<number>;
    available_from?: Nullable<DateTime>;
    property_id: number;
}

export interface UpdatePropertyStep3Input {
    bedrooms?: Nullable<number>;
    peoples?: Nullable<number>;
    size?: Nullable<number>;
    property_id?: Nullable<number>;
    details?: Nullable<string>;
    is_furnished?: Nullable<number>;
    id: number;
}

export interface UpdatePropertyStep4Input {
    step4inputList: UpdatePropertyStep4InputType[];
    property_id: number;
}

export interface UpdatePropertyStep4InputType {
    id: number;
    amenities_id: number;
    availability: number;
}

export interface UpdatePropertyStep5Input {
    contract_type?: Nullable<number>;
    property_id?: Nullable<number>;
    cancellation_policy_id?: Nullable<number>;
    additional_required_cost?: Nullable<Nullable<UpdateAdditionalRequiredCostInput>[]>;
    id: number;
}

export interface UpdateAdditionalRequiredCostInput {
    id: number;
    name?: Nullable<string>;
    amount?: Nullable<number>;
}

export interface UpdatePropertyStep6Input {
    document?: Nullable<number>;
    gender?: Nullable<number>;
    tenant?: Nullable<number>;
    pets?: Nullable<number>;
    property_id?: Nullable<number>;
    id: number;
}

export interface FavoritePropertyInput {
    is_favorite: number;
    property_id: number;
}

export interface UpdateUserBookingDto {
    image?: Nullable<string>;
    gender?: Nullable<number>;
    dob?: Nullable<string>;
    occupation?: Nullable<string>;
    dialer_code?: Nullable<number>;
    mobile?: Nullable<number>;
}

export interface RequestBookingDto {
    id?: Nullable<number>;
    name: string;
    number: string;
    exp_month: string;
    exp_year: string;
    cvc: string;
    amount: string;
    first_name: string;
    last_name: string;
    address: string;
    postal: string;
    city: string;
    state: string;
    country: string;
    property_id: number;
    landlord_id: number;
    start_date: string;
    end_date: string;
    city_of_residence?: Nullable<string>;
}

export interface CreateCmsPageInput {
    data: CreateCmsPageItem[];
}

export interface CreateCmsPageItem {
    content: string;
    language_id: number;
    meta_description: string;
    meta_title: string;
    page_name: string;
}

export interface UpdateCmsPageInput {
    data: UpdateCmsPageItem[];
}

export interface UpdateCmsPageItem {
    id: number;
    content: string;
    language_id: number;
    meta_description: string;
    meta_title: string;
    page_name: string;
}

export interface CreatelanguageInput {
    name: string;
    language_code: string;
}

export interface StateEntity {
    id: number;
    name: string;
    country_id: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface StateList {
    id: number;
    name: string;
}

export interface CountryEntity {
    id: number;
    name: string;
    code: string;
    status: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface CountryList {
    id: number;
    name: string;
}

export interface CmsEntity {
    id: number;
    identifier: string;
    page_name: string;
    meta_title: string;
    meta_description: string;
    language_id: number;
    content: string;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface SpokenLanguagesEntity {
    id: number;
    name: string;
    language_code: string;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at: DateTime;
}

export interface CityEntity {
    id: number;
    name: string;
    state_id: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface CityList {
    id: number;
    name: string;
}

export interface MediaEntity {
    id: number;
    name: string;
    type: number;
    property_id: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface AdditionalRequiredCostEntity {
    id: number;
    property_id: number;
    name: string;
    amount: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface SpaceOverviewEntity {
    id: number;
    bedrooms: number;
    peoples: number;
    size: number;
    property_id: number;
    details: string;
    is_furnished: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface PropertyEntity {
    id: number;
    min_rental_period: number;
    max_rental_period: number;
    type: string;
    name: string;
    currency: string;
    latitude: number;
    longitude: number;
    postal_code: string;
    house_no: string;
    rent: number;
    is_mobile_verified: number;
    status: number;
    country_id: number;
    state_id: number;
    city_id: number;
    available_from: string;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    user_id: number;
    media?: Nullable<MediaEntity[]>;
    is_favorite?: Nullable<number>;
    images?: Nullable<MediaEntity[]>;
    thumbnail: string;
    total_favorites?: Nullable<number>;
    first_month_rent?: Nullable<string>;
    space?: Nullable<SpaceOverviewEntity>;
    one_time_service_fee?: Nullable<string>;
    landlord: UserEntity;
    host_details: UserEntity;
    city_details: CityEntity;
    state_details: StateEntity;
    country_details: CountryEntity;
    space_overview: SpaceOverviewEntity;
    amenity: PropertyAmenityEntity[];
    facility: PropertyAmenityEntity[];
    rental_condition: RentalConditionEntity;
    additional_required_cost: AdditionalRequiredCostEntity[];
    rules_and_preference: RuleOrPreferenceEntity;
    tenant_counts: number;
}

export interface CreatePropertyResponse {
    message: string;
    property_id: number;
}

export interface PropertyPaginationResponse {
    properties: PropertyEntity[];
    total_properties?: Nullable<number>;
}

export interface FieldWiseCount {
    type?: Nullable<CountArray[]>;
    size?: Nullable<CountArray[]>;
    furniture?: Nullable<CountArray[]>;
    suitable_for?: Nullable<CountArray[]>;
    amenities?: Nullable<CountArray[]>;
    facilities?: Nullable<CountArray[]>;
}

export interface PropertyFilterResponse {
    properties: PropertyEntity[];
    field_wise_count?: Nullable<FieldWiseCount>;
    total_properties: number;
}

export interface CountArray {
    name: string;
    total?: Nullable<number>;
}

export interface BookingEntity {
    id: number;
    tenant_id: number;
    property_id: number;
    propertys_id?: Nullable<PropertyEntity>;
    landlord_id: number;
    status: number;
    start_date?: Nullable<DateTime>;
    end_date?: Nullable<DateTime>;
    amount: number;
    is_special_amount?: Nullable<number>;
    reason_for_rejection?: Nullable<string>;
    currency?: Nullable<string>;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    month_difference?: Nullable<number>;
    service_cost?: Nullable<string>;
    tenant?: Nullable<UserEntity>;
    property?: Nullable<PropertyEntity>;
    landlord?: Nullable<UserEntity>;
}

export interface TenantResponse {
    data: BookingEntity;
    message: string;
}

export interface BookingPaginationResponse {
    booking: BookingEntity[];
    total_booking: number;
}

export interface UserEntity {
    id?: Nullable<number>;
    image?: Nullable<string>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    address?: Nullable<string>;
    country_id?: Nullable<number>;
    state_id?: Nullable<number>;
    city_id?: Nullable<number>;
    gender?: Nullable<number>;
    dob?: Nullable<string>;
    occupation?: Nullable<string>;
    identity_proof?: Nullable<string>;
    proof_of_occupation_income?: Nullable<string>;
    email?: Nullable<string>;
    dialer_code?: Nullable<number>;
    mobile?: Nullable<number>;
    password?: Nullable<string>;
    is_mobile_verified?: Nullable<number>;
    is_email_verified?: Nullable<number>;
    verification_token?: Nullable<string>;
    verification_token_exp?: Nullable<DateTime>;
    reset_password_token?: Nullable<string>;
    reset_password_token_exp?: Nullable<DateTime>;
    social_type?: Nullable<number>;
    social_token?: Nullable<string>;
    token?: Nullable<string>;
    notification_is_enable?: Nullable<number>;
    pincode?: Nullable<string>;
    notification_language?: Nullable<number>;
    login_at?: Nullable<DateTime>;
    is_landlord?: Nullable<number>;
    created_at?: Nullable<DateTime>;
    updated_at?: Nullable<DateTime>;
    deleted_at?: Nullable<DateTime>;
    user_type?: Nullable<number>;
    TotalProperties?: Nullable<number>;
    listedProperties?: Nullable<ListedProperty[]>;
}

export interface ListedProperty {
    name: string;
    id: number;
}

export interface UserDocumentsVerifyResponse {
    user_details: boolean;
    null_fields?: Nullable<UserEntity>;
}

export interface AdminEntity {
    id: number;
    user_name: string;
    email: string;
    password: string;
    role: number;
    status: number;
    token?: Nullable<string>;
    reset_password_token?: Nullable<string>;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface AdminPaginationResponse {
    admins: AdminEntity[];
    total_admins: number;
}

export interface SiteConfigEntity {
    id: number;
    message: string;
    name: string;
    logo: string;
    address: string;
    email: string;
    contact: number;
    status: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface SiteConfigResponse {
    data: SiteConfigEntity[];
    message: string;
}

export interface SiteConfigResponseSingle {
    data: SiteConfigEntity;
    message: string;
}

export interface AmenityEntity {
    id: number;
    name: string;
    status: number;
    type: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface AmenitiesListingResponse {
    amenities: AmenitiesListingResponseType[];
    facilities: AmenitiesListingResponseType[];
}

export interface AmenitiesListingResponseType {
    id: number;
    name: string;
    availability: number;
}

export interface PropertyAmenityEntity {
    id: number;
    amenities_id: AmenityEntity;
    property_id: number;
    availability: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface RentalConditionEntity {
    id: number;
    contract_type: number;
    property_id: number;
    cancellation_policy_id: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    additional_required_cost?: Nullable<AdditionalRequiredCostEntity[]>;
}

export interface RuleOrPreferenceEntity {
    id: number;
    document: number;
    gender: number;
    tenant: number;
    pets: number;
    property_id: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface MessageEntity {
    id: number;
    booking_id: number;
    to_id: number;
    from_id: number;
    status: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    tenant: UserEntity;
    booking: BookingEntity;
    landlord: UserEntity;
}

export interface ChildMessageEntity {
    id: number;
    message_id: number;
    to_id: number;
    from_id: number;
    text: string;
    file?: Nullable<string>;
    status: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
    message_ids: MessageEntity;
    from_ids: UserEntity;
    to_ids: UserEntity;
}

export interface ChildMessageResponse {
    data: ChildMessageEntity[];
    booking_data: BookingEntity;
    tenant_data?: Nullable<UserEntity>;
    landlord_data?: Nullable<UserEntity>;
    property_data?: Nullable<PropertyEntity>;
    message: string;
}

export interface PropertyVerificationResponse {
    mobile_number: string;
    property_id: number;
}

export interface GoogleOauthLoginResponse {
    id?: Nullable<number>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    email?: Nullable<string>;
    image?: Nullable<string>;
    social_type?: Nullable<number>;
    token?: Nullable<string>;
}

export interface MonthCount {
    month: string;
    monthCount: number;
}

export interface AdminDashboardData {
    monthWiseUser: MonthCount[];
    otherData: AdminDashboardDataType[];
    avalibleYears: number[];
    totalUserYear: number;
}

export interface AdminDashboardDataType {
    name: string;
    value: number;
}

export interface MangeUserResponse {
    users: UserEntity[];
    total_users: number;
}

export interface LiveChatResponse {
    text: string;
    file?: Nullable<string>;
    to_id: number;
    tenant_name: string;
    from_id: number;
    landlord_name: string;
    tenant_image: string;
    landlord_image: string;
    created_at?: Nullable<DateTime>;
}

export interface MessagePayload {
    message: string;
    bookingId: number;
    from: number;
    landlord_name: string;
    to: number;
    tenant_name: string;
    tenant_image: string;
    landlord_image: string;
    messageFile?: Nullable<string>;
    created_at?: Nullable<DateTime>;
}

export interface Dates {
    start_date: string;
    end_date: string;
}

export interface Property {
    id?: Nullable<number>;
    name?: Nullable<string>;
    user_id?: Nullable<number>;
}

export interface City {
    city_id?: Nullable<number>;
    city_name?: Nullable<string>;
}

export interface LastMessage {
    id: number;
    message_id: number;
    to_id: number;
    from_id: number;
    text: string;
    file?: Nullable<string>;
    status: number;
    created_at: DateTime;
}

export interface UserMessage {
    userMessages: LastMessage;
}

export interface LandlordData {
    id?: Nullable<number>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    image?: Nullable<string>;
}

export interface TenantData {
    id?: Nullable<number>;
    first_name?: Nullable<string>;
    last_name?: Nullable<string>;
    image?: Nullable<string>;
}

export interface MessageWithLandlordData {
    id: number;
    booking_id: number;
    to_id: number;
    from_id: number;
    status: number;
    created_at: DateTime;
    updated_at: DateTime;
    landlordData?: Nullable<LandlordData>;
    tenantData?: Nullable<TenantData>;
    dates?: Nullable<Dates>;
    property?: Nullable<Property>;
    city?: Nullable<City>;
    userMessages?: Nullable<UserMessage>;
}

export interface MessageResponse {
    data: MessageWithLandlordData[];
    message: string;
}

export interface BookingResponses {
    data: BookingEntity;
    message: string;
}

export interface ContinueChatting {
    User: UserEntity;
    Bookings: BookingEntity;
    PropertyDetail: PropertyEntity;
    LandloardDetail: UserEntity;
    GetMessageData: MessageEntity;
    Message: ChildMessageEntity[];
}

export interface MangeUserPropertyResponse {
    properties: PropertyEntity[];
    total_properties: number;
}

export interface FindAllCMSResponse {
    page: CmsEntity[];
}

export interface UserRegisterResponse {
    id: number;
    token: string;
    message: string;
}

export interface LanguageCreatedResponse {
    message: string;
    avalible_pages: string[];
}

export interface CMSCreatedResponse {
    message: string;
}

export interface MangeReservation {
    reservations?: Nullable<BookingEntity[]>;
    totalReservations: number;
}

export interface Reservation {
    reservations: BookingEntity;
    ServiceFee: number;
    TotalAmountPaid: number;
    messages: ChildMessageEntity[];
}

export interface ContactUsEntity {
    id: number;
    name: string;
    email?: Nullable<string>;
    mobile?: Nullable<string>;
    message?: Nullable<string>;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface CommissionFeesEntity {
    id: number;
    type: number;
    value: number;
    currency: string;
    status: number;
    commission_from: number;
    created_at: DateTime;
    updated_at: DateTime;
    deleted_at?: Nullable<DateTime>;
}

export interface CommissionFeesResponseSingle {
    data: CommissionFeesEntity;
    message: string;
}

export interface IQuery {
    getHello(): string | Promise<string>;
    authUrl(): string | Promise<string>;
    admins(): AdminEntity[] | Promise<AdminEntity[]>;
    admin(id: number): AdminEntity | Promise<AdminEntity>;
    MangeUser(name: string, page: number, pagesize: number): MangeUserResponse | Promise<MangeUserResponse>;
    FindOneUser(id: number): UserEntity | Promise<UserEntity>;
    searchAdmins(page_size: number, page_number: number, admin_name?: Nullable<string>): AdminPaginationResponse | Promise<AdminPaginationResponse>;
    contactUs(): ContactUsEntity[] | Promise<ContactUsEntity[]>;
    siteconfig(id: number): SiteConfigResponseSingle | Promise<SiteConfigResponseSingle>;
    siteconfigs(): SiteConfigResponse | Promise<SiteConfigResponse>;
    findConfigOnly(): SiteConfigResponseSingle | Promise<SiteConfigResponseSingle>;
    commisionData(): CommissionFeesResponseSingle | Promise<CommissionFeesResponseSingle>;
    FindOneUserById(id: number): UserEntity | Promise<UserEntity>;
    findUserPropetry(name: string, page: number, pagesize: number, PropertyStatus: string): MangeUserPropertyResponse | Promise<MangeUserPropertyResponse>;
    propertyVerification(property_id: number): PropertyVerificationResponse | Promise<PropertyVerificationResponse>;
    sendOTP(property_id: number): PropertyVerificationResponse | Promise<PropertyVerificationResponse>;
    duplicatePropertyList(): PropertyEntity[] | Promise<PropertyEntity[]>;
    StepWisePropertyData(property_id: number, property_step: number): StepWisePropertyData[] | Promise<StepWisePropertyData[]>;
    userSearchAndFilterProperty(searchAndFilterParam: SearchAndFilterPropertyInput): Nullable<PropertyFilterResponse> | Promise<Nullable<PropertyFilterResponse>>;
    favoritePropertyList(page_number: number, page_size: number): PropertyPaginationResponse | Promise<PropertyPaginationResponse>;
    searchPropertyByParam(property_name: string, page_number: number, page_size: number, property_type: string): PropertyPaginationResponse | Promise<PropertyPaginationResponse>;
    userFeaturePropertyList(): PropertyEntity[] | Promise<PropertyEntity[]>;
    findOneProperty(property_id: number): Nullable<PropertyEntity> | Promise<Nullable<PropertyEntity>>;
    amenitiesListing(): Nullable<AmenitiesListingResponse> | Promise<Nullable<AmenitiesListingResponse>>;
    featurePropertyList(): PropertyEntity[] | Promise<PropertyEntity[]>;
    publicSearchAndFilterProperty(searchAndFilterParam: SearchAndFilterPropertyInput): Nullable<PropertyFilterResponse> | Promise<Nullable<PropertyFilterResponse>>;
    continueChatting(id: number): ContinueChatting | Promise<ContinueChatting>;
    dataVerification(id: number): UserDocumentsVerifyResponse | Promise<UserDocumentsVerifyResponse>;
    inbox(status: number): MessageResponse | Promise<MessageResponse>;
    getPerticularChat(messageListingInput: MessageListingDto): ChildMessageResponse | Promise<ChildMessageResponse>;
    amountData(booking_id: number): string | Promise<string>;
    firstMonthRent(property_id: number): PropertyEntity | Promise<PropertyEntity>;
    tenantHistory(tenant_name: string, page_number: number, page_size: number, status: string, tenantPropertyId: MessageListingDto): BookingPaginationResponse | Promise<BookingPaginationResponse>;
    tenantView(tenantInput: MessageListingDto): TenantResponse | Promise<TenantResponse>;
    apartmentDetails(property_id: MessageSendDto): PropertyEntity | Promise<PropertyEntity>;
    GetPayoutConfirmationStatus(): number | Promise<number>;
    adminDashboard(Year: number): AdminDashboardData | Promise<AdminDashboardData>;
    countryList(): Nullable<CountryList[]> | Promise<Nullable<CountryList[]>>;
    stateList(country_id: number): Nullable<StateList[]> | Promise<Nullable<StateList[]>>;
    cityList(state_id: number): Nullable<CityList[]> | Promise<Nullable<CityList[]>>;
    FindAllCMSResponse(): FindAllCMSResponse | Promise<FindAllCMSResponse>;
    FindOneCms(identifier?: Nullable<string>): Nullable<CmsEntity[]> | Promise<Nullable<CmsEntity[]>>;
    language_list(): SpokenLanguagesEntity[] | Promise<SpokenLanguagesEntity[]>;
    allReservation(name: string, page: number, pagesize: number, propertyType: string, status?: Nullable<number>): MangeReservation | Promise<MangeReservation>;
    reservation(id: number): Reservation | Promise<Reservation>;
}

export interface IMutation {
    login(userInput: LoginUserArgs): UserLoginResponse | Promise<UserLoginResponse>;
    forgetPassword(email: string): string | Promise<string>;
    resetPassword(inputArgs: ResetPasswordArgs): string | Promise<string>;
    forgetPasswordUser(email: string): string | Promise<string>;
    resetPasswordUser(inputArgs: ResetPasswordArgs): string | Promise<string>;
    LogInGoogle(input: LogInArgs): GoogleOauthLoginResponse | Promise<GoogleOauthLoginResponse>;
    LogOut(): string | Promise<string>;
    createAdmin(createAdminInput: CreateAdminInput): string | Promise<string>;
    updateAdmin(updateAdminInput: UpdateAdminInput): string | Promise<string>;
    deleteAdmin(adminUsersId: number): string | Promise<string>;
    deleteUser(UsersId: number): string | Promise<string>;
    createContactUs(createContactUsInput: CreateContactUsInput): string | Promise<string>;
    createSiteconfig(createSiteconfigInput: CreateSiteconfigInput, upload_logo?: Nullable<Upload>): SiteConfigResponse | Promise<SiteConfigResponse>;
    updateSiteconfig(updateSiteconfigInput: UpdateSiteconfigInput, upload_logo?: Nullable<Upload>): SiteConfigResponse | Promise<SiteConfigResponse>;
    removeSiteconfig(id: number): SiteConfigResponse | Promise<SiteConfigResponse>;
    createOrUpdatePolicy(policy: Upload, name: PolicyTypeEnum): string | Promise<string>;
    updateCommisionOnly(updateCommissionOnly: UpdateCommissionOnly): CommissionFeesResponseSingle | Promise<CommissionFeesResponseSingle>;
    updateUserType(updateUser: UpdateUserType): string | Promise<string>;
    updateUserProfileOnly(UpdateUserProfileOnly: UpdateUserProfileOnly, image?: Nullable<Upload>): string | Promise<string>;
    deleteUserUser(user_id: number): string | Promise<string>;
    supportingDocument(supportingDocument: SupportingDocument, identity_proof?: Nullable<Upload>, proof_of_occupation_income?: Nullable<Upload>): string | Promise<string>;
    changeUserPassword(ChangeUserPassword: ChangePasswordArgs): string | Promise<string>;
    notificationSetting(NotificationSetting: UserNotificationSettings): string | Promise<string>;
    userContactInformation(UserContactInformation: UserContactInformation): string | Promise<string>;
    deletePropertyUser(property_id: number): string | Promise<string>;
    createUser(createUserInput: CreateUserInput, image?: Nullable<Upload>): UserRegisterResponse | Promise<UserRegisterResponse>;
    createPropertyStep2(createPropertyInput: CreatePropertyStep2Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    createPropertyStep3(createPropertyInput: CreatePropertyStep3Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    createPropertyStep4(createPropertyInput: CreatePropertyStep4Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    createPropertyStep5(createPropertyInput: CreatePropertyStep5Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    createPropertyStep6(createPropertyInput: CreatePropertyStep6Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    createPropertyStep7(property_id: number, images?: Nullable<Upload[]>, videos?: Nullable<Upload>, youtube_url?: Nullable<string>): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    insertPhoneNo(dialerCode: string, mobileNumber: string): PropertyVerificationResponse | Promise<PropertyVerificationResponse>;
    verifyOTP(verifyOTPInput: VerifyOTPInput): string | Promise<string>;
    duplicateProperty(property_id: number): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    editPropertyStep2(updatePropertyStep2Input: UpdatePropertyStep2Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    editPropertyStep3(updatePropertyStep3Input: UpdatePropertyStep3Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    editPropertyStep4(updatePropertyStep4Input: UpdatePropertyStep4Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    editPropertyStep5(updatePropertyStep5Input: UpdatePropertyStep5Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    editPropertyStep6(updatePropertyStep6Input: UpdatePropertyStep6Input): CreatePropertyResponse | Promise<CreatePropertyResponse>;
    removePropertyStep7(id: number[]): string | Promise<string>;
    favoriteProperty(favorite: FavoritePropertyInput): string | Promise<string>;
    deleteProperty(property_id: number): string | Promise<string>;
    messageWithInfoInput(UpdateUserForBooking: UpdateUserBookingDto, messageWithInfo: MessageSendDto, proofOfIdentity?: Nullable<Upload>, occupation?: Nullable<Upload>): BookingResponses | Promise<BookingResponses>;
    sendMessage(fromId: number, toId: number, bookingId: number, message: string, status: number, messageFile?: Nullable<Upload>): MessagePayload | Promise<MessagePayload>;
    messageInput(messageInput: MessageSendDto, messageFile?: Nullable<Upload>): string | Promise<string>;
    dateRangeUpdate(dateChange: MessageSendDto): string | Promise<string>;
    changeStatus(statusChange: MessageSendDto): string | Promise<string>;
    requestBooking(transactionFinalize: RequestBookingDto): string | Promise<string>;
    UpdatePayoutStatus(status: boolean, booking_id: number): string | Promise<string>;
    createCmsPage(CreateCmsPageInput: CreateCmsPageInput): CMSCreatedResponse | Promise<CMSCreatedResponse>;
    uploadForCmsPage(file?: Nullable<Upload>): string | Promise<string>;
    UpdateCmsPage(updateCms: UpdateCmsPageInput): string | Promise<string>;
    removeCmsPage(id: number): string | Promise<string>;
    createLanguage(createLanguageInput: CreatelanguageInput): LanguageCreatedResponse | Promise<LanguageCreatedResponse>;
    removeLanguage(id: number): string | Promise<string>;
}

export interface ISubscription {
    newMessage(fromId: number, toId: number, bookingId: number): LiveChatResponse | Promise<LiveChatResponse>;
}

export type DateTime = any;
export type Upload = any;
export type StepWisePropertyData = PropertyEntity | SpaceOverviewEntity | PropertyAmenityEntity | RentalConditionEntity | RuleOrPreferenceEntity | MediaEntity;
export type UserLoginResponse = AdminEntity | UserEntity;
type Nullable<T> = T | null;
