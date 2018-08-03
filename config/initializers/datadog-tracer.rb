require 'ddtrace'

tracer = Datadog.tracer
sampler = Datadog.configure do |c|
  c.tracer hostname: 'trace-vlog.local'
  c.use :rails, service_name: 'Rails-App'
  c.tracer sampler: Datadog::RateSampler.new(1)
  c. tracer priority_sampling: Datadog::Ext::Priority::AUTO_KEEP
  c.tracer tags: { 'env' => 'rubyrails' }
end